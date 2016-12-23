import React, { Component } from 'react';
import Header from './Header';
import ImageGallery from 'react-image-gallery';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCategoryIndex: 0,
      images: {}
    };
  }

  componentWillMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/imageData.json', true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        this.setState({ currentCategoryIndex: 0, images: JSON.parse(xhr.responseText) });
      }
    }
    xhr.send();
  }

  changeCategory(index) {
    this.setState({ currentCategoryIndex: index });
  }

  render() {
    const { currentCategoryIndex, images } = this.state;
    return (
      <div className="container">
        <Header/>
        <div className="container-fluid padded-container" style={{paddingBottom: '0'}}>
            <h1>Our Gallery</h1>
            <hr/>
        </div>
        <div className="container-fluid" style={{background: 'white', padding: '0', maxHeight: '500px', borderTop: '1px solid #eee'}}>
          <div className="col-md-4 col-sm-4 col-xs-4" style={{padding: '0px'}}>
              {Object.keys(images).map((folder,index) =>
                <div onClick={e => this.changeCategory(index)} className={"gallery-item" + (index === currentCategoryIndex ? " active" : "")} key={folder}>{folder}</div>)}
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8" style={{margin: '0px', background: '#eee'}}>
            <ImageGallery items={images[Object.keys(images)[currentCategoryIndex]]}
              infinite={true}
              showPlayButton={false}
              showFullscreenButton={false}
              slideInterval={500}
              showThumbnails={false}
              showBullets={true}
              lazyLoad={true}/>
          </div>
        </div>
      </div>
    );
  }
}
