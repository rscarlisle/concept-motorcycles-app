import React, { Component } from 'react' 
import { Row, Col, Modal, Button } from 'react-materialize'; 
import MotorcycleDetailView from './motorcycle_detailview' 
import AddMotorcycleForm from './add_motorcycle_form'
import axios from 'axios'

const feedStyles = {
  cardImage: {
    width: '100%', 
    height: '300px', 
    maxWidth: '455px'
  },
  containerTop: {
    margin: '20px', 
    display: 'flex' 
  }, 
  topModal: {
    marginLeft: 'auto'
  }
}

class MotorcycleFeed extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      motorcycles: []
    } 

    this.refreshMotorcycles = this.refreshMotorcycles.bind(this)
  }   

  componentDidMount() { 
    axios.get(`http://localhost:3001/motorcycles`)
    .then(res => {
      this.setState({
        motorcycles: res.data.motorcycles
      })
    })
  } 

  refreshMotorcycles() {
    axios.get(`http://localhost:3001/motorcycles`)
    .then(res => {
      this.setState({
        motorcycles: res.data.motorcycles
      })
    })
  }

  makeCol(motorcycle, key) {
    return( 
      <Modal
      header='Modal Header'
      key={key} 
      trigger={
        <Col l={4} m={6} s={12} className='grid-example'>
          <img src={motorcycle.image_url} style={feedStyles.cardImage} alt={motorcycle.name}/> 
          <div>{motorcycle.name}</div> 
        </Col>
      }> 
      {/* <p>Hello there {key}</p> */}
      <MotorcycleDetailView motorcycle={motorcycle}/>
      </Modal>

    )
  }

  render() {
    return ( 
      <div>
        <div className="container-top" style={feedStyles.containerTop}> 
          <Modal
            className={feedStyles.topModal}
            header='Modal Header'
            trigger={ 
              <Button floating large className='red' waves='light' icon='add' />
            }>
               <AddMotorcycleForm refreshMotorcycles={this.refreshMotorcycles}/>
          </Modal> 
        </div>
        <Row>
          { this.state.motorcycles.map((motorcycle, i) => this.makeCol(motorcycle, i)) }
        </Row> 
      </div>
    )
  }

} 


export default MotorcycleFeed