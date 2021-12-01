import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);
  // Frontity's approach to use the Excerpt includes a link to the wordpress page, taking a manual approach
  const preview = item.content.rendered.substring(0,300) + "...";

  return (
    <Article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      

      <div>
        {/* If the post has an author, we render a clickable author text. */}
        {author && (
        
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
        
        )}

        <PublishDate>
          {" "}
          on <b>{date.toDateString()}</b>
        </PublishDate>
        <PeviewSection>
          <span>{preview}</span>
        </PeviewSection>
      </div>
    </Link>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Article = styled.article`
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 25px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 10px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const PeviewSection = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
  font-size: 0.9rem;
  padding-top: 10px;
`;
