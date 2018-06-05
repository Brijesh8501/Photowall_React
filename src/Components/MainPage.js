import React, {Component} from "react"
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddImage from './AddImage'
import {Route} from 'react-router-dom'
class MainPage extends Component
{
    constructor()
    {
        super()
        this.state = {
            postInfo :[],
            displayScreen : "Image"
        }
        this.removePost = this.removePost.bind(this);
        this.addImagesToState = this.addImagesToState.bind(this);
    }

    removePost(postRemove)
    {
        console.log(postRemove.description)
        this.setState((state) => ({
            postInfo : state.postInfo.filter(post => post !== postRemove)
        })
        )
    }
    addImagesToState(newSubmitDataToPost)
    {
        this.setState((state) => ({
            postInfo : state.postInfo.concat(newSubmitDataToPost)
        }))
    }

    componentDidMount()
    {
        const dataFromDatabase = DataFromDatabase()
        this.setState({
            postInfo : dataFromDatabase
        })
    }
    componentDidUpdate(prevProps,prevState)
    {
        console.log(this.state)
    }
    render() {
        return <div>
            <Route exact path = "/" render={() => (
                <div>
            <Title TitleD = {'PhotoWall'}/>
            <PhotoWall posts = {this.state.postInfo} removeProps = {this.removePost} />

        </div>
            )}/>
            <Route exact path = "/navPage" render={({history}) => (

                <AddImage newImages={(newPost) => {
                    this.addImagesToState(newPost)
                    history.push('/')

                }}/>

            )}/>
        </div>
    }

}


function DataFromDatabase()
{
    return [{
        id: "0",
            description: "Brijesh Ahir image00",
        imageLink: "https://www.rexall.ca/media/northern_banner/banner/mobile_image/h/p/hp2_-_mobile_banner_pp06_-_beautyheadtotoe_3.png"
    },
    {
        id: "1",
            description: "Brijesh Ahir image01",
        imageLink: "https://www.rexall.ca/media/northern_banner/banner/cache/1/image/beff4985b56e3afdbeabfc89641a4582/h/p/hp2_-_desktop_banner_pp06_-_beautyheadtotoe_3.png"
    },
    {
        id: "2",
            description: "Brijesh Ahir image02",
        imageLink: "https://f.wishabi.net/flyers/8b0a350c-91ab-4869-927a-a67fbabb5025/4_31_4.jpg"

    },
    {
        id: "3",
            description: "Brijesh Ahir image03",
        imageLink: "https://f.wishabi.net/flyers/8b0a350c-91ab-4869-927a-a67fbabb5025/4_31_4.jpg"

    }]

}
export default MainPage