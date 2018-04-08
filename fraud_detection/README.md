# Bitcoin-Fraud-Detection

This package helps detect transaction fraud within Bitcoin network using a combination of Robust Covariance Estimation Model (RCE) and network proximity analysis

## Installation

1. Install libraries
  ```
  pip install networkx
  pip install scikit-learn
  ```

2. (Optional) update files
  ```
  python Read_file.py
  ```
3. Run analysis program
  ```
  python run.py
  ```

## Robust Covariance Estimation

For Gaussian distributed data, the distance of an observation x_i to the mode of the distribution can be computed using its Mahalanobis distance: ![equation](http://latex.codecogs.com/gif.latex?d_%7B%28%5Cmu%2C%5CSigma%29%7D%28x_i%29%5E2%20%3D%20%28x_i%20-%20%5Cmu%29%27%5CSigma%5E%7B-1%7D%28x_i%20-%20%5Cmu%29) where ![equation](http://latex.codecogs.com/gif.latex?%5Cmu) and ![equation](http://latex.codecogs.com/gif.latex?%5Csigma) are the location and the covariance of the underlying Gaussian distribution.

In practice, ![equation](http://latex.codecogs.com/gif.latex?%5Cmu) and ![equation](http://latex.codecogs.com/gif.latex?%5Csigma) are replaced by some estimates. The usual covariance maximum likelihood estimate is very sensitive to the presence of outliers in the data set and therefor, the corresponding Mahalanobis distances are. One would better have to use a robust estimator of covariance to guarantee that the estimation is resistant to “erroneous” observations in the data set and that the associated Mahalanobis distances accurately reflect the true organisation of the observations.

The Minimum Covariance Determinant estimator is a robust, high-breakdown point (i.e. it can be used to estimate the covariance matrix of highly contaminated datasets, up to ![equation](http://latex.codecogs.com/gif.latex?%5Cfrac%7Bn_%5Ctext%7Bsamples%7D-n_%5Ctext%7Bfeatures%7D-1%7D%7B2%7D) outliers) estimator of covariance. The idea is to find ![equation](http://latex.codecogs.com/gif.latex?%5Cfrac%7Bn_%5Ctext%7Bsamples%7D&plus;n_%5Ctext%7Bfeatures%7D&plus;1%7D%7B2%7D) observations whose empirical covariance has the smallest determinant, yielding a “pure” subset of observations from which to compute standards estimates of location and covariance.

The Minimum Covariance Determinant estimator (MCD) has been introduced by P.J.Rousseuw

Yunfan Yang, 2018 (c)
