export default class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
      'X-Requested-With': 'XMLHttpRequest',
      'X-Mashape-Key': 'IUAqaQj8c9mshaYahDXlgDkfTfwtp1RziUPjsnu1sWZUCJ4sDe'
    }
  }

  static get(route){
    return this.xhr(route, null, 'GET')
  }

  static put(route, params) {
    this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com';
    const url = `${host}${route}`;
    let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null);
    options.headers = Api.headers();
    return fetch(url, options).then( resp => {
      let json = resp.json();
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err})
    })
  }

}
