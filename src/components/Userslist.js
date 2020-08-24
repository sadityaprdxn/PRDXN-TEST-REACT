import React, { useState , useEffect } from 'react';
import {
  useParams,
  useHistory
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/userAction';
import Postli from './Postli';

const Userslist = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const [pageNumber , changeNumber] = useState(params.pageNumber);

    const postList = () => {
        let postNumber = 0;

        const output = state.data.map(({name, culture, aliases, playedBy, gender}) => {
                        if( name !== '' && postNumber < 20 ) {
                        postNumber += 1;
                        return (
                            <Postli
                                name = {name}
                                key = {postNumber}
                                culture = {culture}
                                aliases = {aliases}
                                competitors = {playedBy}
                                gender = {gender}
                            />
                        )
                    }
                })

        return output;
    }

    const paginate = (paginateNumber) => {
        changeNumber(paginateNumber);
        history.push(`/listing/${paginateNumber}`)
    }

    const paginateByOne = ( paginateTo ) => {
        if(paginateTo === 'prev') {
            if(parseInt(params.pageNumber)-1 <= 0) {
                changeNumber(1);
                history.push(`/listing/1`);
            } else {
                changeNumber(parseInt(params.pageNumber)-1);
                history.push(`/listing/${parseInt(params.pageNumber)-1}`);
            } 
        } else if (paginateTo === 'next') {
            if(parseInt(params.pageNumber)+1 >= 5) {
                changeNumber(5);
                history.push(`/listing/5`);
            } else {
                changeNumber(parseInt(params.pageNumber)+1);
                history.push(`/listing/${parseInt(params.pageNumber)+1}`);
            }
        }
    }

    useEffect(() => {
        if(parseInt(params.pageNumber) > 5 || parseInt(params.pageNumber) <= 0 ) {
            history.push('/error');
        } else {
            dispatch(fetchUsers(params.pageNumber));
        }
    }, [pageNumber , params]);

    return (
        <section className="user-posts">
            <div className="wrapper">
                <h2>users posts</h2>
                <ul className="posts-list">

                    {
                    state.isLoading ? (<li className="loading"><h3>loading</h3></li>) :

                    state.isError ? (<li className="error"><h3>error</h3></li>) :

                    (postList())
                    }
                </ul>
                
                <ul className="pagination-list">
                    {
                        state.isLoading || state.isError ?
                        (<li>?</li>) :
                        
                        (
                        <>
                        <li className='prev' onClick={() => paginateByOne('prev')}>prev</li>
                        <li className={params.pageNumber === '1' ? "active" : ""} onClick={() => paginate(1)}>1</li>
                        <li className={params.pageNumber === '2' ? "active" : ""} onClick={() => paginate(2)}>2</li>
                        <li className={params.pageNumber === '3' ? "active" : ""} onClick={() => paginate(3)}>3</li>
                        <li className={params.pageNumber === '4' ? "active" : ""} onClick={() => paginate(4)}>4</li>
                        <li className={params.pageNumber === '5' ? "active" : ""} onClick={() => paginate(5)}>5</li>
                        <li className='next' onClick={() => paginateByOne('next')}>next</li>
                        </>
                        )
                    }
                </ul>
            </div>
        </section>
    );
}

export default Userslist;
