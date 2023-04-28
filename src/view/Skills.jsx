import React from 'react';
import keeper from '../image/keeper.png'
import ec from '../image/ec.png'
import netkeirin from '../image/netkeirin.png'


function Skills(){
    return (
        <>
            <div className="skills" id="skills">
                <h3>Skills</h3>
                <div className="skill">
                    <p>2020年に独学でHTML,CSSの勉強を初め、2021年の8月から1年間カナダの学校でweb&mobile application developmentのクラスを終了し、現在フロントエンドエンジニアを目指し勉強を継続中。</p>
                </div>
                <div className="products">
                    <ul>
                        <li>
                            <img src={keeper} alt="" width="300px" height="180px"/>
                            <p>シンプルなToDOリスト、メモのようなアプリです。</p>
                        </li>
                        <li>
                            <img src={ec} alt="" width="300px" height="180px"/>
                            <p>APIを使ってECサイトを1から作ってみました。<br/>バックエンドは使っていないので基本的な機能とデザイン重視です。</p>
                        </li>
                        <li>
                            <img src={netkeirin} alt="" width="300px" height="180px"/>
                            <p>netkeirinのモバイル用サイトのトップページとサイドメニューをクローンしてみました。画像が一部単色の画像になっています。</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Skills;