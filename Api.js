import React from 'react';
import {} from 'react-native';
import axios from 'axios';

class Api{
    constructor(){
        this.state = {
            isLoading: false,
            url: 'http://dmonster1566.cafe24.com',
            path: '/json/proc_json.php',
            dataSource: {},
        }
    }

    send(method, datas, callback){

        this.makeFormData(method, datas);
    
        this.state.isLoading = true;
    
        return Axios.post(this.state.url + this.state.path,)
        .then((response) => {
            //console.warn(responseJson);
            let responseJson = response.data;
            let resultItem = responseJson.result;
            let message = responseJson.msg;
            let arrItems = responseJson.data;
            // console.log(responseJson);
    
            let returnJson = { resultItem: { result: resultItem === 'false'?'N':'Y', message: message }, arrItems: arrItems };
            this.state.isLoading = false;
            // this.state.dataSource = arrItems;
            //각 메소드별로 값을 저장해둠.
    
            if (resultItem === 'false' && message) {
              console.log(method, message);
              if (!(method==='')) {
                cusToast(message);
              }
            }
    
            if(typeof(callback)=='function'){
              callback(returnJson);
            }else{
              return returnJson;
            }
        })
        .catch(function (error) {
          console.log("Axios catch!!!>>", method, error);
        });
      }
}

export default Api = new Api();
