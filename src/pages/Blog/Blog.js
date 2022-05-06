import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
           
            <div className="blog">
                <h4>Difference between javascript and nodejs</h4>
                <table>
                    <thead>
                        <tr> 
                            <th>Javascript</th>
                             <th>Node.js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>	
Javascript is a programming language that is used for writing scripts on the website. </td>
<td>
NodeJS is a Javascript runtime environment.
</td>
</tr>
<tr>
    <td>Javascript can only be run in the browsers.</td>
    <td>We can run Javascript outside the browser with the help of NodeJS.</td>
</tr>
<tr>
    <td>It is basically used on the client-side.</td>
    <td>It is mostly used on the server-side.</td>
</tr>
<tr>
    <td>	Javascript is capable enough to add HTML and play with the DOM. </td>
    <td>Nodejs does not have capability to add HTML tags.</td>
</tr>
<tr>
    <td>	Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.  </td>
    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript. .</td>
</tr>
<tr>
    <td>	Javascript is used in frontend development. </td>
    <td>Nodejs is used in server-side development.</td>
</tr>
                    </tbody>
                </table>
            </div>
            <div className='blog'>
                <h4>When should use Node.js and when mongoDB</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Node.js</th>
                            <th>MongoDB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.Bad side of Node.js, being single-threaded, may be a bad choice for web servers doubling as computational servers, since heavy computation will block the server's responsiveness. However, Node.js itself isn't bad: The technology is quite mature and widely used for many different types of servers</td>
                            <td>NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.SQL databases are used to store structured data while NoSQL databases like MongoDB are used to save unstructured data. MongoDB is used to save unstructured data in JSON format. MongoDB does not support advanced analytics and joins like SQL databases support</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="blog">
                <h4>Differences between sql and nosql databases.</h4>
                <table>
                <thead>
                <tr>
                <th>SQL</th>
                <th>NoSQL</th>
                </tr>    
                </thead> 
                <tbody>
                <tr>
                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                </tr>
                <tr>
                    <td>These databases have fixed or static or predefined schema</td>
                    <td>They have dynamic schema</td>
                </tr>
                <tr>
                    <td>These databases are not suited for hierarchical data storage.</td>
                    <td>These databases are best suited for hierarchical data storage.</td>
                </tr>
                <tr>
                    <td>These databases are best suited for complex queries</td>
                    <td>These databases are not so good for complex queries</td>
                </tr>
                <tr>
                    <td>Vertically Scalable</td>
                    <td>Horizontally scalable</td>
                </tr>
                <tr>
                    <td>Follows ACID property</td>
                    <td>	Follows CAP(consistency, availability, partition tolerance)</td>
                </tr>
                </tbody>  
                </table>        
            </div>
            <div className="blog">
                <h4> What is the purpose of jwt and how does it work</h4>
            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWT can be used as an access token to prevent unwanted access to a protected resource. They're often used as Bearer tokens, which the API will decode and validate before sending a response.
            </div>
        </div>
    );
};

export default Blog;