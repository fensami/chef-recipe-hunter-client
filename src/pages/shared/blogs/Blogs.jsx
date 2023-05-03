import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <div className="w-75 mx-auto mt-3 mb-5  border px-4 rounded">
            <h2 className="text-center fst-italic fw-bold text-primary mb-4 mt-3">Question and Answer</h2>
            <h3><span className="text-primary">Question_1:</span> The differences between uncontrolled and controlled components.</h3>
            <h6><span className="text-primary">Answer:</span> In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</h6>
            <h3><span className="text-primary">Question_2:</span> How to validate React props using PropTypes?</h3>
            <h6><span className="text-primary">Answer:</span> props is an object passed to the component instance. propTypes is an object were you declare the types of the data under props. PropTypes it is an object packed with some utility - props type checker - functions to include in propTypes, so we don't reinvent the wheel.</h6>
            <h3><span className="text-primary">Question_3:</span> The difference between nodejs and express js.</h3>
            <h6><span className="text-primary">Answer:</span> NodeJS is a framework of JavaScript which is mainly used for working with the backend of our application or building the backend using JavaScript, whereas ReactJS is a JavaScript front-end library. It is mainly used for building the user interface or the frontend of our application</h6>
            <h3><span className="text-primary">Question_4:</span> What is a custom hook, and why will you create a custom hook?</h3>
            <h6><span className="text-primary">Answer:</span> A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. we can reuse stateful logic easily across different components in an optimized and scalable format. Custom Hooks also produce a clean and structured codebase that reduces complexity and redundancy in your React project.</h6>
        </div>
        </Container>
    );
};

export default Blogs;