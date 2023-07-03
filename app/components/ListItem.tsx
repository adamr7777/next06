
import Link from 'next/link';
import formatDate from '@/lib/formatDate';


type Props = {
    post: BlogPost
};


function ListItem({post}: Props) {
    const {date, title, id} = post
    // const formattedDate = formatDate(date);
    return (
        <li className='mt-4 text-2xl dark:text-white/90' id={id}>
            <Link className='underline hover:text-black/70 dark:hover:text-white' href={`/blogposts/${id}`}>
                {title}
            </Link>
            <br/>
            <p className='text-sm mt-1'>{date}</p>
        </li>
    );
};

export default ListItem;