import "./App.css"
import "./index.css"

function App(){
    return(
        <div>
            <div>
                <h1>My Courses (3)</h1> 
                <div className="course-status">
                    <div>All</div>
                    <div>Active</div>
                    <div>Completed</div>
                    <div>UpComing</div>
                </div>  
            </div>
            <div className="course-list">
                <div className="course-item">
                    <div className="course-item__img">
                        <img src="/public/images/img1.jpg" alt="" className="img" />
                    </div>
                    <div className="course-item__detail">
                        <div className="course-item__body">
                            <div>
                                <p className="title">English Lecture</p>
                                <p className="desc">Language Lessons With The Most Popular Teachers</p>
                            </div> 
                            <span className="rate">
                                ⭐️
                                4.5
                            </span>
                        </div>
                        <div className="course-item__footer">
                            <div className="tags">
                                <span className="badge badge--secondary">React.js</span>
                            </div>
                            <div className="caption">
                                <div className="date">
                                    Aug 2 , 2023
                                </div>
                                <span className="badge badge--secondary">
                                    Completed
                                </span>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="course-item">
                    <div className="course-item__img">
                        <img src="/public/images/img2.jpg" alt="" className="img" />
                    </div>
                    <div className="course-item__detail">
                        <div className="course-item__body">
                            <div>
                                <p className="title">
                                    Design Strategy
                                </p>
                                <p className="desc">
                                    Lesson On Planning Design Concept And Proper Planning Of Work
                                </p>
                            </div>
                            
                            <span className="rate">
                                ⭐️
                                3.9
                            </span>
                        </div>
                        <div className="course-item__footer">
                            <div className="tags">
                                <span className="badge badge--secondary">
                                    React.js
                                </span>
                                <span className="badge badge--secondary">
                                    React.js
                                </span>
                            </div>
                            <div className="caption">
                                <div className="date">
                                    Aug 4 , 2023
                                </div>
                                <span className="badge badge--danger">
                                    UpComing
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-item">
                    <div className="course-item__img">
                        <img src="/public/images/img3.jpg" alt="" className="img" />
                    </div>
                    <div className="course-item__detail">
                        <div className="course-item__body">
                            <div>
                                <p className="title">Business Lecture</p>
                                <p className="desc">Lecturs On How To Build Your Business Safely Without Fare Of New Projects</p>
                            </div>
                            <span className="rate">
                                ⭐️
                                4.2
                            </span>
                        </div>
                        <div className="course-item__footer">
                            <div className="tags">
                                <span className="badge badge--secondary">
                                    React.js
                                </span>
                                <span className="badge badge--secondary">
                                    Node.js
                                </span>
                            </div>
                            <div className="caption">
                                <div className="date">
                                    Jul 2 , 2023
                                </div>
                                <span className="badge badge--primary">
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <p>Course Result:</p>
                <p>You have successfully passed 33% of your courses.</p>
            </div>
        </div>
    )
}

export default App;