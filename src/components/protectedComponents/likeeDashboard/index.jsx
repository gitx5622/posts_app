import React, {Fragment, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../../dataStore/actions/postsAction";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';


import "../../../styles/index.scss";
import Loading from "../../../utils/Loading";


const PostDashboard = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    const postsSelector = useSelector(store => store.postState);
    const {
        isLoading: postsLoading,
        isSuccess: postsSuccess,
        isError: postsError,
        errorMessage,
        posts: postsData,
    } = postsSelector;

    const dispatch = useDispatch();

    useEffect(() => {
        getPosts(dispatch);
        document.querySelector('.main-area').scroll({ top: 0 });
    }, [dispatch]);

    return (
        <Fragment>
            <div className="post-dashboard">
                <div className="sidebar">
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem
                            button
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Posts" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comments" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="AuthPosts" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="CreatePosts" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List component="nav" aria-label="secondary mailbox folder">
                        <ListItem
                            button
                            selected={selectedIndex === 4}
                            onClick={(event) => handleListItemClick(event, 4)}
                        >
                            <ListItemText primary="Trash" />
                        </ListItem>
                        <ListItem
                            button
                            selected={selectedIndex === 5}
                            onClick={(event) => handleListItemClick(event, 5)}
                        >
                            <ListItemText primary="Spam" />
                        </ListItem>
                    </List>
                </div>
                <div className="main-area">
                    {postsLoading ? <Loading type="spinningBubbles" color="#3498DB"/> : ""}
                    {selectedIndex === 0 ?
                        <div>
                            <h3 className="post-title">Lists of Posts</h3>
                            <List component="nav" aria-label="contacts">
                                { postsData && postsData.map(post => { return (
                                <ListItem key={post.id} button autoFocus={true}>
                                    <ListItemIcon>
                                        <StarIcon color="secondary"/>
                                    </ListItemIcon>
                                    <ListItemText primary={post.title} />
                                </ListItem>
                                )
                                })}
                            </List>
                    </div> : "No posts"
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default PostDashboard;