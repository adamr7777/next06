
import {getSortedPostsData} from '@/lib/posts';
import ListItem from './ListItem';


function Posts() {
    const posts = getSortedPostsData();
    const mappedPosts = posts.map((item)=> (
        <ListItem key={item.id} post={item}/>
    ));
    return (
        <section className='mt-6 mx-auto max-w-2xl'>
            <h2 className='text-4xl font-bold dark:text-white/90'>Blog</h2>
            <ul className='w-full'>{mappedPosts}</ul>
        </section>
    );
};

export default Posts;


