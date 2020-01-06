import React from 'react';
import "./css/Quiz.css";
import "./css/Quiz-anims.css";
import ludzik from './gfx/ludzik.svg';

// backgroundColor: "#74bff5", color: "#145596", borderColor: "#145596"

class Quiz extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="quiz-wrapper">
                <div id="quiz-button-exit" className="" onClick={(e) => { this.props.setScreen(0); }}>X</div>
                <div className="quiz-content">
                    <div id="speech-content" style={{ display: "flex", width: "100%", height: "0px", position: "relative", boxSizing: "border-box", left: "-600px", paddingRight: "10px", justifyContent: "center", alignItems: "center"}}>
                        <img src={ludzik} width={"33%"} style={{ transform: "rotate(20deg)" }} ></img>
                        <div id="speech-bubble" style={{ width: "100%" }}>Ania Tomal es la mas hermosa del mundo!</div>
                    </div>
                    <div className="quiz-progress">
                        <div className="quiz-progress-bar"><div style={{ width: `${Math.min(this.props.group.experience, 100)}%` }}></div></div>
                        <div id="quiz-progress-icon" style={{ backgroundColor: "#aaa", color: "#555" }}>{this.props.group.level}</div>
                    </div>
                    <div id="quiz-box" style={(!this.props.isFlipped) ? {} : { backgroundColor: "#444", color: "white", borderColor: "#2f2f2f" }} onClick={(e) => { /*this.props.onClick();*/ }}>
                        <p>{(this.props.group.word) ? ((!this.props.isFlipped) ? this.props.group.word.key : (this.props.group.word.answer instanceof Array) ? this.props.group.word.answer.map((e, i) => { return (i < this.props.group.word.answer.length - 1) ? e + "/" : e }) : this.props.group.word.answer) : this.props.group.getWord()}</p>
                    </div>
                    <input id="quiz-input" placeholder={"escriba aqui"} style={(!this.props.isFlipped) ? {} : { opacity: "0.25" }} onKeyUp={(e) => {
                        if (e.keyCode == 13) {
                            if (e.target.value.trim()) {
                                this.props.answer(e.target.value.trim());
                                e.target.value = "";
                            }
                            else if (!this.props.isFlipped) {
                                this.props.answer("");
                                e.target.value = "";
                            }
                        }
                        else if (this.props.isFlipped) {
                            e.target.value = e.target.value.substring(0, e.target.value.length - 1);
                        }
                    }} onKeyDown={(e) => { if (e.keyCode != 13 && this.props.isFlipped) e.target.value = e.target.value.substring(0, e.target.value.length); }} />
                    {/* <div className="quiz-popup">
                        <p className="quiz-popup-header">la palabra nueva!</p>
                        <p className="quiz-popup-name">{this.props.group.words[this.props.group.level + 1].key}</p>
                        <p className="quiz-popup-translation">{this.props.group.words[this.props.group.level + 1].answer}</p>
                    </div> */}
                </div>

            </div>
        );
    }
}

export default Quiz;