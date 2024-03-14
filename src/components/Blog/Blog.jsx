import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    // console.log(blog);
    const {cover, title,author_name,author_img,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='mb-20'>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className="text-xl font-bold">{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <div className="text-3xl font-semibold">{title}</div>
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