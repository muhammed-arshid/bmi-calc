import React, { Component } from 'react'
import BmiSuggestions from './BmiSuggestions.tsx'
export default class BmiCalculator extends Component {
  state ={
    weight:'',
    height:'',
    bmi:''
  }
  setWeight = (event) => {
    this.setState({ weight: event.target.value });
    console.log(this.state)
  };

  setHeight = (event) => {
    this.setState({ height: event.target.value });
    console.log(this.state)
  };
  resetForm = () => {
    this.setState({ weight: '', height: '', bmi: '' });
  };
  calculateBMI = () => {
    const { weight, height } = this.state;
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height)/100;
    if (!isNaN(weightNum) && !isNaN(heightNum) && heightNum > 0) {
      const bmi: any = (weightNum / (heightNum * heightNum)).toFixed(2);
      let message:string = '';
      console.log(bmi)
      if (bmi < 18.5) message = 'Underweight';
      else if (bmi >= 18.5 && bmi < 24.9) message = 'Normal weight';
      else if (bmi >= 25 && bmi < 29.9) message = 'Overweight';
      else message = 'Obese';

      this.setState({ bmi, message });
    } else {
      alert('Please enter valid numerical values for weight and height.');
    }
  };

  render() {
    const { weight, height, bmi } = this.state;

    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg w-full bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-center mb-4">BMI Calculator</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={this.setWeight}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your weight"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={this.setHeight}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your height"
        />
      </div>
      <button
            onClick={this.calculateBMI}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Calculate BMI
          </button>
      {bmi && <BmiSuggestions bmi={bmi} />}
      <button
            onClick={this.resetForm}
            className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Check Another BMI
          </button>
    </div>
    </div>
    )
  }
}
