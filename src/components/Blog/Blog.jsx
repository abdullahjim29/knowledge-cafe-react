import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, handleAddToBookmark}) => {
    // console.log(blog);
    const {cover, title,author_name,author_img,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='mb-20'>
            <img className='w-[684px] h-[370px] rounded-lg' src={cover} alt="" />
            <div className='flex justify-between mt-8'>
                <div className='flex gap-5'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className='flex'>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className='relative bottom-3 ml-2'><FaRegBookmark /></button>
                </div>
            </div>
            <div className="text-3xl font-semibold mt-6 mb-4">{title}</div>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;