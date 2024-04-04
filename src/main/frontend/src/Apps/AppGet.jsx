import { useEffect, useState } from 'react';
import axios from 'axios';
import AppForm from './AppForm';

export default function AppGet() {
  const [data, setData] = useState('');
  const [user, setUser] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get('/rp/react/data')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {console.log(err)});
  }, []);
  useEffect(() => {
    axios.get('/rp/react/json')
    .then(res => {
      setUser(res.data);
      setIsLoading(false);
    })
    .catch(err => console.log(err));
  }, []);
  console.log(user)
  return (
    <div className="App">
      <header className="App-header">
        <h3>
            받아온 값: {data ? data : '받은 값이 없음'}
        </h3>
        <h3>{isLoading ? '로딩 중...' : ''}</h3>
        <table border={1}>
          <thead>
          <tr><th>아이디</th><th>이름</th><th>이메일</th><th>가입일</th></tr>
          </thead>
          <tbody>
          {
            user.map((uData,idx) =>(
              <tr key={idx}>
                <td>{uData.uid}</td><td>{uData.uname}</td>
                <td>{uData.email}</td><td>{uData.regDate}</td>
              </tr>
            ))
          }
          </tbody>
        </table>
        <AppForm />
      </header>
    </div>
  );
}