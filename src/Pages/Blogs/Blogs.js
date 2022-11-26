import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-4 p-3 lg:p-10 border-red-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/HKqgmvD/react.jpg" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>What are the different ways to manage a state in a React application?</h3>
                    <p>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.</p>

                    <ul className=' my-5 list-disc'>
                        <li>
                            <span className='font-bold'>Reacting to input with state</span>
                            <p className='text-sm'>With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input. This is similar to how designers think about UI.</p>
                        </li>
                        <li>
                            <span className='font-bold'>Choosing the state structure</span>
                            <p className="text-sm">Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs. The most important principle is that state shouldn’t contain redundant or duplicated information. If there’s some unnecessary state, it’s easy to forget to update it, and introduce bugs!</p>
                        </li>
                        <li>
                            <span className="font-bold">Sharing state between components</span>
                            <p className="text-sm">Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code.</p>
                        </li>
                        <li>
                            <span className="font-bold">Preserving and resetting state</span>
                            <p className="text-sm">When you re-render a component, React needs to decide which parts of the tree to keep (and update), and which parts to discard or re-create from scratch. In most cases, React’s automatic behavior works well enough. By default, React preserves the parts of the tree that “match up” with the previously rendered component tree.</p>
                        </li>
                        <li>
                            <span className="font-bold">Extracting state logic into a reducer</span>
                            <p className="text-sm">Components with many state updates spread across many event handlers can get overwhelming. For these cases, you can consolidate all the state update logic outside your component in a single function, called “reducer”. Your event handlers become concise because they only specify the user “actions”. At the bottom of the file, the reducer function specifies how the state should update in response to each action!</p>
                        </li>
                        <li>
                            <span className="font-bold">Passing data deeply with context</span>
                            <p className="text-sm">Usually, you will pass information from a parent component to a child component via props. But passing props can become inconvenient if you need to pass some prop through many components, or if many components need the same information. Context lets the parent component make some information available to any component in the tree below it—no matter how deep it is—without passing it explicitly through props.</p>
                        </li>
                        <li>
                            <span className="font-bold">Scaling up with reducer and context</span>
                            <p className="text-sm">Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components. You can combine reducers and context together to manage state of a complex screen.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border-4 p-3 lg:p-10 border-red-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/YNK9Wth/cover.png" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>How does prototypical inheritance work?</h3>
                    <p className='text-sm'>Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’.</p>
                    <p className='text-sm'>Javascript’s version of class-based programming and other traditional class-based programming languages work with the same concept but does not work exactly similar. There are differences in its keyword, syntax, and how it works. There are also debates regarding pros and cons of Javascript’s version of class-based programming.</p>
                    <p className='text-sm'>So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.</p>
                </div>
            </div>
            <div className='border-4 p-3 lg:p-10 border-red-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/Tv76qpT/39483ff6-4269-400d-bca7-1dd059c31c02.jpg" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>What is a unit test? Why should we write unit tests?</h3>
                    <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. <strong>A unit can be anything you want it to be — a line of code, a method, or a class.</strong></p>
                    <p>Generally, smaller tests are better as they give a more granular view of your code’s performance. Also, when you test very small units, your tests can run fast, like a thousand tests in a second fast.</p>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold text-xl'>There are two types of unit testing:</span>
                        <li className='ml-4 text-sm'>
                            <strong>Manual:</strong>As the name implies, unit tests are run manually to verify the correctness of your code. This is done before writing automated tests. Its drawback is that you have to manually test your functions/classes whenever you make changes to them.
                        </li>
                        <li className='ml-4 text-sm'>
                            <strong>Automated:</strong>This is the preferred unit testing method as it can be carried out by simply running a script. Automated tests also make it easier to run tests when your application scales.
                        </li>
                    </ul>
                    <ul className=' my-5 list-disc'>
                        <span className='font-bold text-xl'>Why Do We Need Unit Testing?</span>
                        <p>To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:</p>
                        <li className='ml-4 text-sm'>
                            Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                        </li>
                        <li className='ml-4 text-sm'>
                            Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                        </li>
                        <li className='ml-4 text-sm'>
                            It simplifies the debugging process.
                        </li>
                        <li className='ml-4 text-sm'>
                            Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        </li>
                        <li className='ml-4 text-sm'>
                            Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                        </li>
                        <li className='ml-4 text-sm'>
                            Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                        </li>
                        <li className='ml-4 text-sm'>
                            In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
                        </li>
                    </ul>
                </div>
            </div>
            <div className='border-4 p-3 lg:p-10 border-red-400 rounded-2xl my-5'>
                <div className='mb-4'>
                    <img src="https://i.ibb.co/Rj5xy5T/1-l-C1kj3-Ie-Xo-E8-Z3-OCKJo-Wkw.jpg" className='w-full lg:w-3/12' alt="" />
                </div>
                <hr />
                <div>
                    <h3 className='my-5 font-bold text-2xl lg:text-4xl'>React vs. Angular vs. Vue?</h3>
                    <p>There are three frameworks for building web applications that every frontend developer has heard about: React, Vue.js, and Angular.</p>
                    <p>React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.</p>
                    <p>They can be used almost interchangeably to build front-end applications, but they’re not 100 percent the same, so it makes sense to compare them and understand their differences.</p>
                    <p>Each framework is component-based and allows the rapid creation of UI features.</p>
                    <p>However, they all have a different structure and architecture — so first, we’ll look into their architectural differences to understand the philosophy behind them.</p>
                    <h3 className='text-xl lg:text-3xl font-semibold'>Architecture</h3>
                    <div className=' my-5'>
                        <span className='font-bold text-xl'>React</span>
                        <p className='text-sm'>
                            React doesn’t enforce a specific project structure, and as you can see from the official “Hello World” example below, you can start using React with just a few lines of code.
                        </p>
                        <div className='text-sm my-4 border w-full lg:w-2/5 p-5'>
                            ReactDOM.render( <br />
                            <h1>Hello, world!</h1>, <br />
                            document.getElementById('root') <br />
                            );
                        </div>
                        <p className='text-sm'>
                            React can be used as a UI library to render elements, without enforcing a specific project structure, and that’s why it’s not strictly a framework.
                        </p>
                        <p className='text-sm'>
                            <strong>React Elements</strong> are the smallest building blocks of React apps. They are more powerful than DOM elements because the React DOM makes sure to update them efficiently whenever something changes.
                        </p>
                        <p className='text-sm'>
                            <strong>Components</strong> are larger building blocks that define independent and reusable pieces to be used throughout the application. They accept inputs called props and produce elements that are then displayed to the user.
                        </p>
                        <p className='text-sm'>
                            React is based on JavaScript, but it’s mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time.
                        </p>
                        <p className='text-sm'>
                            Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it’s more intuitive.
                        </p>
                    </div>
                    <div className=' my-5'>
                        <span className='font-bold text-xl'>Vue</span>
                        <p className='text-sm'>
                            The Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework.
                        </p>
                        <p className='text-sm'>Although Vue is not strictly associated with the MVVM (Model-View-ViewModel) pattern, its design was partly inspired by it. With Vue, you’ll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View.</p>
                        <p className='text-sm'>Vue’s templating syntax lets you create View components, and it combines familiar HTML with special directives and features. This templating syntax is preferred, even though raw JavaScript and JSX are also supported.</p>
                        <p className='text-sm'>Components in Vue are small, self-contained, and can be reused throughout the application. Single File Components (SFCs) with the .vue extension contain HTML, CSS, and JavaScript so that all relevant code resides in one file.</p>
                        <p className='text-sm'>SFCs are the recommended way to organize code in Vue.js projects, especially larger ones. Tools such as Webpack or Browserify are required to transpile SFCs into working JavaScript code.</p>
                    </div>
                    <div className=' my-5'>
                        <span className='font-bold text-xl'>Angular</span>
                        <p className='text-sm'>In this article, I’m discussing Angular 2, and not the first version of the framework which is now known as AngularJS.</p>
                        <p className='text-sm'>AngularJS, the original framework, is an MVC (Model-View-Controller) framework. But in Angular 2, there’s no strict association with MV*-patterns as it is also component-based.</p>
                        <p className='text-sm'>Projects in Angular are structured into Modules, Components, and Services. Each Angular application has at least one root component and one root module.</p>
                        <p className='text-sm'>Each component in Angular contains a Template, a Class that defines the application logic, and MetaData (Decorators). The metadata for a component tells Angular where to find the building blocks that it needs to create and present its view.</p>
                        <p className='text-sm'>Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.</p>
                        <p className='text-sm'>Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn’t enforce their use, it’s highly suggested to structure apps as a set of distinct services that can be reused.</p>
                        <p className='text-sm'>Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;