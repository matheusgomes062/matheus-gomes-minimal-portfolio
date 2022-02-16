import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
// import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import './BlogContainer.css'

// const { t } = useTranslation();
const BlogContainer = ({ blog }) => (
  <div className='blog'>
    <h3>{i18next.t(blog.name)}</h3>

    <p className='blog__description'>{i18next.t(blog.description)}</p>
    {blog.stack && (
      <ul className='blog__stack'>
        {blog.stack.map((item) => (
          <li key={uniqid()} className='blog__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {blog.sourceCode && (
      <a
        href={blog.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {blog.livePreview && (
      <a
        href={blog.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default BlogContainer
