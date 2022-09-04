import '../styles/Blogs.scss';
import { useEffect, useState } from 'react';

export const Blogsget = ()=>{
    const [users, setUsers] = useState([]);
    const api = ()=>{
        fetch('http://localhost:3001/posts').then(response => response.json()).then(json =>{
            setUsers(json);
        });
    }
    useEffect(()=>{
        api();
    }, []);
    return(
    <>
        <div className="rootBlog">
            <section className="posts">
                <div className="container_01">
                    {users.map(val =>{
                        return(
                        <div className="artiqles">
                        <h3>{val.user}</h3>
                        <h4>{val.book}</h4>
                        <p><strong>Message:</strong> {val.message}</p>
                    </div>
                        )
                    })}
                </div>
            </section>
        </div>
    </>
    )
}
