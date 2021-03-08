import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const {location: {state} }= this.props;
        if(state){
            const {title, year, poster, genres, rating, summary} = state;
            return (
            <div className="detail">
                <div className="detail__page">
                    <img className="detail__img" src={poster} alt={title} title={title}/>
                    <div className="detail__data">
                        <h3 className="detail__title">{title}</h3>
                        <h5 className="detail__year">{year}</h5>
                        <h5 className="detail__genres">{genres.join(", ")}</h5>
                        <h5 className="detail__rating">{rating}/10</h5>
                        <p className="detail__summary">{summary}</p>
                    </div>
                </div>
            </div>
            );
        } else {
            return null;
        }
    }
}


export default Detail;