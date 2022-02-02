import React, {
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    WebView,
} from 'react-native'


var DomParser = require('advanced-html-parser')
class TestReactNativeHtmlParser extends Component {
    componentDidMount() {
        let html = `<html>
                        <body>
                            <div id="b">
                                <a href="example.org">
                                <div class="inA">
                                    <br>bbbb</br>
                                </div>
                            </div>
                            <div class="bb">
                                Test
                            </div>
                        </body>
                    </html>`
        let doc = new DomParser().parse(html)
        
        console.log(doc.querySelector('#b .inA'))
        console.log(doc.getElementsByTagName('a'))
        console.log(doc.querySelector('#b a[href="example.org"]'))
    }
    
}