import axios from 'axios';
import React, {createContext, useState} from 'react';
import {BASE_URL} from './components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let tokenblic;

  const register = async (
    nik,
    name,
    gender,
    address,
    email,
    password,
    phone,
  ) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/api/register`, {
        nik,
        name,
        gender,
        address,
        email,
        password,
        phone,
      });
      // Menangani status respons
      if (response.status === 200) {
        let userInfo = response.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
        console.log('Registrasi berhasil:', userInfo);
      } else {
        // Menangani status respons selain 200
        console.log(
          'Ada masalah dalam registrasi, status respons:',
          response.status,
        );
      }
    } catch (error) {
      setIsLoading(false);
      // Menangkap kesalahan saat melakukan panggilan API
      if (error.response) {
        // Server memberikan respons dengan status di luar kisaran 2xx
        if (error.response.status === 422) {
          console.error('Permintaan tidak valid:', error.response.data);
        } else if (error.response.status === 401) {
          console.error('Tidak terotorisasi:', error.response.data);
        } else {
          console.error('Error response dari server:', error.response.data);
        }
      } else if (error.request) {
        // Request dibuat tetapi tidak ada respons dari server
        console.error('Tidak ada respons dari server:', error.request);
      } else {
        // Terjadi kesalahan lainnya
        console.error('Kesalahan lainnya:', error.message);
      }
    }
    const login = async (email, password) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/api/login`, {
                email,
                password,
            });
            // Menangani status respons
            if (response.status === 200) {
                let userInfo = response.data;
                let refreshToken = response.data.refresh_token;
                let token = response.data.token;
                await AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('refreshToken', refreshToken);
                let getToken = await AsyncStorage.getItem('token');
                tokenblic = 'Bearer '.concat(getToken);
                console.log(tokenblic);
                // console.log(getToken);
                setIsLoading(false);
                // console.log('Registrasi berhasil:', userInfo);
                // await profile();
            } else {
                // Menangani status respons selain 200
                console.log('Ada masalah dalam registrasi, status respons:', response.status);
            }
        } catch (error) {
            setIsLoading(false);
            // Menangkap kesalahan saat melakukan panggilan API
            if (error.response) {
                // Server memberikan respons dengan status di luar kisaran 2xx
                if (error.response.status === 422) {
                    console.error('Permintaan tidak valid:', error.response.data);
                } else if (error.response.status === 401) {
                    console.error('Tidak terotorisasi:', error.response.data);
                } else {
                    console.error('Error response dari server:', error.response.data);
                }
            } else if (error.request) {
                // Request dibuat tetapi tidak ada respons dari server
                console.error('Tidak ada respons dari server:', error.request);
            } else {
                // Terjadi kesalahan lainnya
                console.error('Kesalahan lainnya:', error.message);
            }
        }
    }
    const profile = async () => {
        setIsLoading(true);
        const getOtp = await AsyncStorage.getItem('otp');
        const tkn = `Bearer ${getOtp}`
        try {
            const response = await axios.get(`${BASE_URL}/api/profile`, {
                headers: {
                    'Authorization': tkn,
                    'ngrok-skip-browser-warning': true
                }
            }).then(response => {
                setIsLoading(false);
                console.log('data:', response.data)
            }).catch(response => {
                console.log('error:', response)
            })
        } catch (error) {
            setIsLoading(false);
            // Menangkap kesalahan saat melakukan panggilan API
            if (error.response) {
                // Server memberikan respons dengan status di luar kisaran 2xx
                if (error.response.status === 422) {
                    console.error('Permintaan tidak valid:', error.response.data);
                } else if (error.response.status === 401) {
                    console.error('Tidak terotorisasi:', error.response.data);
                } else {
                    console.error('Error response dari server:', error.response.data);
                }
            } else if (error.request) {
                // Request dibuat tetapi tidak ada respons dari server
                console.error('Tidak ada respons dari server:', error.request);
            } else {
                // Terjadi kesalahan lainnya
                console.error('Kesalahan lainnya:', error.message);
            }
        }
       } else if (error.request) {
    // Request dibuat tetapi tidak ada respons dari server
    console.error('Tidak ada respons dari server:', error.request);
  } else {
    // Terjadi kesalahan lainnya
    console.error('Kesalahan lainnya:', error.message);
  }
}

  };
  const profile = async () => {
    setIsLoading(true);

    console.log(tokenblic);
    try {
      const response = await axios
        .get(`${BASE_URL}/api/profile`, {
          headers: {
            Authorization: tokenblic,
            'ngrok-skip-browser-warning': true,
          },
        })
        .then(response => {
          setIsLoading(false);
          console.log('data:', response.data);
        })
        .catch(response => {
          console.log('error:', response);
        });
    } catch (error) {
      setIsLoading(false);
      // Menangkap kesalahan saat melakukan panggilan API
      if (error.response) {
        // Server memberikan respons dengan status di luar kisaran 2xx
        if (error.response.status === 422) {
          console.error('Permintaan tidak valid:', error.response.data);
        } else if (error.response.status === 401) {
          console.error('Tidak terotorisasi:', error.response.data);
        } else {
          console.error('Error response dari server:', error.response.data);
        }
      } else if (error.request) {
        // Request dibuat tetapi tidak ada respons dari server
        console.error('Tidak ada respons dari server:', error.request);
      } else {
        // Terjadi kesalahan lainnya
        console.error('Kesalahan lainnya:', error.message);
      }
    }
  };
  const sendOTP = async email => {
    setIsLoading(true);

    // console.log(tokenblic);
    try {
      const response = await axios
        .post(`${BASE_URL}/api/send-otp`, {
          email,
        })
        .then(async response => {
          setIsLoading(false);
          console.log('data:', response.data);
          await AsyncStorage.setItem('otp', String(response.data.data.otp));
          await AsyncStorage.setItem(
            'userId',
            String(response.data.data.user_id),
          );
        })
        .catch(response => {
          console.log('error:', response);
        });
    } catch (error) {
      setIsLoading(false);
      // Menangkap kesalahan saat melakukan panggilan API
      if (error.response) {
        // Server memberikan respons dengan status di luar kisaran 2xx
        if (error.response.status === 422) {
          console.error('Permintaan tidak valid:', error.response.data);
        } else if (error.response.status === 401) {
          console.error('Tidak terotorisasi:', error.response.data);
        } else {
          console.error('Error response dari server:', error.response.data);
        }
      } else if (error.request) {
        // Request dibuat tetapi tidak ada respons dari server
        console.error('Tidak ada respons dari server:', error.request);
      } else {
        // Terjadi kesalahan lainnya
        console.error('Kesalahan lainnya:', error.message);
      }
    }
  };
  const ressPass = async (password, confirmPassword) => {
    setIsLoading(true);
    let userId = await AsyncStorage.getItem('userId');
    // console.log(tokenblic);
    try {
      const response = await axios
        .post(`${BASE_URL}/api/reset-password`, {
          user_id: userId,
          new_password: password,
          confirm_password: confirmPassword,
        })
        .then(response => {
          setIsLoading(false);
          console.log('data:', response.data);
        })
        .catch(response => {
          console.log('error:', response);
        });
    } catch (error) {
      setIsLoading(false);
      // Menangkap kesalahan saat melakukan panggilan API
      if (error.response) {
        // Server memberikan respons dengan status di luar kisaran 2xx
        if (error.response.status === 422) {
          console.error('Permintaan tidak valid:', error.response.data);
        } else if (error.response.status === 401) {
          console.error('Tidak terotorisasi:', error.response.data);
        } else {
          console.error('Error response dari server:', error.response.data);
        }
      } else if (error.request) {
        // Request dibuat tetapi tidak ada respons dari server
        console.error('Tidak ada respons dari server:', error.request);
      } else {
        // Terjadi kesalahan lainnya
        console.error('Kesalahan lainnya:', error.message);
      }
    }
  };
  return (
    <AuthContext.Provider
      value={{
        register,
        isLoading,
        userInfo,
        login,
        profile,
        sendOTP,
        ressPass,
      }}>
      {children}
    </AuthContext.Provider>
  );

