import React, {useEffect, useState} from "react";
import axios from "axios";

function Test(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/test')
            .then((req) => {
                const {data} = req;
                console.log(data);
            })
            .catch((err) => {
                console.log("통신 시 오류가 발생했습니다.");
            });
    }, []);

    return (
        <div>
            <h3>스프링 내부에 리액트</h3>
        </div>
    );
}

export default Test;