import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='Sam' 
                    timeAgo = "Today at 2am" 
                    commentText="shoob borks" 
                    profileImage={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author='Alex' 
                    timeAgo = "Today at 1am" 
                    commentText="I am shoob" 
                    profileImage={faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail
                    author='Jane' 
                    timeAgo = "Today at 5am" 
                    commentText="I like doggos" 
                    profileImage={faker.image.avatar()}
                />
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'))