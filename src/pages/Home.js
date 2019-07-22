import React,{Component} from 'react';
import ReactDom from 'react-dom';

import ReactSwipe from 'react-swipe';
import '../assets/css/home.css'

export default class Home extends Component{
    render(){
        return(
            <div id="home">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        auto: 1000,
                        speed: 300}}
                >
                    <div><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1247899562,3837621314&fm=26&gp=0.jpg"/></div>
                    <div><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=187090315,1702946240&fm=26&gp=0.jpg"/></div>
                    <div><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2294938297,4278932542&fm=26&gp=0.jpg"/></div>
                </ReactSwipe>
                <div className="season">
                        <h3>当季旅游 · HOT SEASON TOUR</h3>
                    <div>
                        <a href="javascript:;"><img src="http://img1.imgtn.bdimg.com/it/u=2159733081,1724008942&fm=26&gp=0.jpg"/></a>
                        <span>巴厘岛</span>
                        <p>本段落可编辑，文本框大小可调节，文字大小可调，字体可编排，文字颜色可编辑，背景色可编辑...（请勿使用带有暴力、污秽以及其他违法的文字描述）</p>
                    </div>
                    <div>
                        <a href="javascript:;"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2436132757,841731780&fm=27&gp=0.jpg"/></a>
                        <span>巴厘岛</span>
                        <p>本段落可编辑，文本框大小可调节，文字大小可调，字体可编排，文字颜色可编辑，背景色可编辑...（请勿使用带有暴力、污秽以及其他违法的文字描述）</p>
                    </div>
                </div>
                <div className="route">
                    <h3>精选线路 · Selected lines</h3>
                    <div className="homeroute">
                        <a href="javascript:;">
                            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1304274660,2531959924&fm=27&gp=0.jpg"/>
                            <p>国际潇洒旅游</p>
                            <span>￥1000.00</span>
                        </a>
                        <a href="javascript:;">
                            <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2080813103,2078461754&fm=26&gp=0.jpg"/>
                            <p>国际潇洒旅游</p>
                            <span>￥1000.00</span>
                        </a>
                        <a href="javascript:;">
                            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1489446332,658757157&fm=26&gp=0.jpg"/>
                            <p>国际潇洒旅游</p>
                            <span>￥1000.00</span>
                        </a>
                        <a href="javascript:;">
                            <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=277765030,1037999492&fm=26&gp=0.jpg"/>
                            <p>国际潇洒旅游</p>
                            <span>￥1000.00</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}