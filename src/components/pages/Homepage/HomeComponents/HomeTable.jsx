import React from 'react';

const HomeTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">Electrical Vehicle</th>
          <th colSpan="2">Bus Car</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan="2">Features</td>
          <td colSpan="2">Features</td>
        </tr>
        <tr>
          <td>Ridge Regression: r=78.26 score=0.27</td>
          <td>Ridge Regression: r=38.03 score=0.34</td>
          <td>Bayes Regression: r=78.31 score 0.27</td>
          <td>Bayes Regression: r=38.08 score=0.34</td>
        </tr>
        <tr>
          <td>Random Forest: r=24.55 score=0.77</td>
          <td>Random Forest: r=18.59 score=0.68</td>
          <td>Decision Tree: r=48.83 score=0.55</td>
          <td>Decision Tree: r=35.43 score=0.38</td>
        </tr>
        <tr>
          <td>Removed Features</td>
          <td>Removed Features</td>
          <td>Removed Features</td>
          <td>Removed Features</td>
        </tr>
        <tr>
          <td>Ridge Regression: r=81.98 score=0.24</td>
          <td>Ridge Regression: r=40.61 score=0.29</td>
          <td>Bayes Regression: r=81.94 score=0.24</td>
          <td>Bayes Regression: r=40.58 score=0.29</td>
        </tr>
        <tr>
          <td>Random Forest: r=52.55 score=0.51</td>
          <td>Random Forest: r=30.31 score=0.47</td>
          <td>Decision Tree: r=84.47 score=0.22</td>
          <td>Decision Tree: r=56.21 score=0.02</td>
        </tr>
      </tbody>
    </table>
  );
};

export default HomeTable;
