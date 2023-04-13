import React, {Component} from 'react';


export default class Map extends Component {
    render() {
        return <div style={{display:"flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
            <iframe
                     src="https://yandex.ru/map-widget/v1/?um=constructor%3A88c3694b4988ac5bfe4d1b3273fba89fcf392326a467a694bccf7b4155845b1a&amp;source=constructor"
                     width="1280" height="720" frameBorder="0"></iframe>;
        </div>
    }
}
