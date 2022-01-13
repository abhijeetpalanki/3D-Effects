import React from 'react';
import './SkillsBar.css';

const SkillsBar = () => {
    return (
        <div className="skills-bar__wrapper">
            <div className="container">
                <h2>5 Star Skills Rating Bar</h2>
                <div className="skills">
                    <h3 className="name">Javascript</h3>
                    <div className="rating">
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                        <input type="radio" name="javascript" />
                    </div>
                </div>
                <div className="skills">
                    <h3 className="name">.NET</h3>
                    <div className="rating">
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                        <input type="radio" name=".net" />
                    </div>
                </div>                
                <div className="skills">
                    <h3 className="name">C#</h3>
                    <div className="rating">
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                        <input type="radio" name="csharp" />
                    </div>
                </div>                
                <div className="skills">
                    <h3 className="name">SQL</h3>
                    <div className="rating">
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                        <input type="radio" name="sql" />
                    </div>
                </div>                
                <div className="skills">
                    <h3 className="name">GIT</h3>
                    <div className="rating">
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                        <input type="radio" name="git" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsBar
