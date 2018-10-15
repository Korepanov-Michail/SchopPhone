import React, { Component } from 'react'
import {connect} from 'react-redux'


//import {getTotalBasketCount, getTotalBasketPrice} from '../../selectors'
import {selectPhoneByPrice} from '../../actions'

class SelectByPrice extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      min: 0,
      max: 1000
    } 

   this.handlePrice_0_10000 = this.handlePrice_0_10000.bind(this); 
   this.handlePrice_0_199 = this.handlePrice_0_199.bind(this);
   this.handlePrice_200_499 = this.handlePrice_200_499.bind(this);
   this.handlePrice_500_799 = this.handlePrice_500_799.bind(this);
   this.handlePrice_800_1099 = this.handlePrice_800_1099.bind(this);
  }
  
  handlePrice_0_10000(event) {
    event.preventDefault(); 
    const min = 0
    const max = 10000
    this.props.selectPhoneByPrice(min,max)
  }
    handlePrice_0_199(event) {
    event.preventDefault(); 
    const min = 0
    const max = 199
    this.props.selectPhoneByPrice(min,max)
  }
   handlePrice_200_499(event) {
    event.preventDefault(); 
    const min = 200
    const max = 499
    this.props.selectPhoneByPrice(min,max)
  }
  handlePrice_500_799(event) {
    event.preventDefault(); 
    const min = 500
    const max = 799
    this.props.selectPhoneByPrice(min,max)
  }
  handlePrice_800_1099(event) {
    event.preventDefault(); 
    const min = 800
    const max = 1099
    this.props.selectPhoneByPrice(min,max)
  }

  render() {
     return (
     <div className='well'> 
        <h4>SelectByPrice</h4>
        <div>
          <form name="male_female" action="" method="post">
              <p className='list-group-item'><input name="dzen" type="radio" value="" onChange={this.handlePrice_0_10000}/> 0 - 10000 $</p>
              <p className='list-group-item'><input name="dzen" type="radio" value="" onChange={this.handlePrice_0_199}  /> 0 - 199 $</p>
              <p className='list-group-item'><input name="dzen" type="radio" value="" onChange={this.handlePrice_200_499}/> 200 - 499 $</p> 
              <p className='list-group-item'><input name="dzen" type="radio" value="" onChange={this.handlePrice_500_799}/> 500 - 799 $</p>
              <p className='list-group-item'><input name="dzen" type="radio" value="" onChange={this.handlePrice_800_1099}/> 800 - 1099 $</p>           
          </form> 
        </div>
     </div>
      )
    }
    }

   

   const mapDispatchToProps = (dispatch) => {
    return {
        selectPhoneByPrice: (min,max) => {
            dispatch(selectPhoneByPrice(min,max));
        }
    }
};

export default connect(null, mapDispatchToProps)(SelectByPrice)
