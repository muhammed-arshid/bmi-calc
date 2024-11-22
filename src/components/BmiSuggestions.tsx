import React, { Component } from 'react';

export default class BmiSuggestions extends Component {
  getSuggestions = () => {
    const { bmi } = this.props;

    if (!bmi) {
      return "Enter your BMI to get suggestions.";
    }

    const bmiValue = parseFloat(bmi);

    if (bmiValue < 18.5) {
      return (
        <div className="bg-blue-100 p-4 rounded shadow border-l-4 border-blue-500">
          <h3 className="text-blue-600 font-bold text-lg">Underweight</h3>
          <p className="mt-2 text-gray-700">Your BMI indicates that you are underweight. Here are some tips:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Increase your calorie intake with nutrient-rich foods.</li>
            <li>Incorporate healthy fats and proteins into your meals.</li>
            <li>Consider consulting a healthcare provider for personalized advice.</li>
          </ul>
        </div>
      );
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return (
        <div className="bg-green-100 p-4 rounded shadow border-l-4 border-green-500">
          <h3 className="text-green-600 font-bold text-lg">Normal Weight</h3>
          <p className="mt-2 text-gray-700">Your BMI is in the normal range. Here are some tips to maintain it:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Continue eating a balanced diet with fruits, vegetables, and whole grains.</li>
            <li>Engage in regular physical activity.</li>
            <li>Stay hydrated and prioritize your mental well-being.</li>
          </ul>
        </div>
      );
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return (
        <div className="bg-yellow-100 p-4 rounded shadow border-l-4 border-yellow-500">
        
          <h3 className="text-yellow-600 font-bold text-lg">Overweight</h3>
          <p className="mt-2 text-gray-700">Your BMI indicates that you are overweight. Here are some suggestions:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Focus on a balanced diet with controlled portion sizes.</li>
            <li>Incorporate regular exercise into your routine.</li>
            <li>Consider seeking advice from a healthcare professional or dietitian.</li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="bg-red-100 p-4 rounded shadow border-l-4 border-red-500">
          <h3 className="text-red-600 font-bold text-lg">Obese</h3>
          <p className="mt-2 text-gray-700">Your BMI indicates that you are obese. Here are some suggestions:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Adopt a healthy eating plan with low-calorie, nutrient-dense foods.</li>
            <li>Engage in regular physical activity that suits your fitness level.</li>
            <li>Consult a healthcare provider for tailored advice and support.</li>
          </ul>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800">Suggestions Based on Your BMI</h2>
        <div className="mt-4">{this.getSuggestions()}</div>
      </div>
    );
  }
}
