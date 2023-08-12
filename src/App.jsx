import "./App.css"
import "./index.css"

function App(){
    return(
        <div>
            <div className="container">
                <h1>My Courses (3)</h1> 
                <div className="course-status">
                    <p>All</p>
                    <p className="Active" >Active</p>
                    <p>Completed</p>
                    <p>UpComing</p>
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
                <div className="course-item"></div>
                <div className="course-item"></div>
            </div>
        </div>
    )
}

export default App;