import axios from "axios";

const API_URL = "http://localhost:3000";

const request = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

// start load event data
const loadEventSuccess = (events) => ({
  type: "LOAD_EVENT_SUCCESS",
  events,
});

const loadEventFailure = () => ({
  type: "LOAD_EVENT_FAILURE",
});

export const loadEvent = () => {
  return (dispatch) => {
    return request
      .get("/")
      .then(function (response) {
        console.log(response, "ini responseeee")
        dispatch(loadEventSuccess(response.data));

      })
      .catch(function (error) {
        console.error(error);
        dispatch(loadEventFailure());
      });
  };
};


// start load event data on dashboard
// export const loadDashboardSuccess = (events) => ({
//   type: 'LOAD_DASHBOARD_SUCCESS', 
//   events,
// })
export const loadDashboard = () => {
return (dispatch) => {
  return request
    .get("/")
    .then(function (response) {
      dispatch(loadDashboardSuccess(response.data));
    })
    .catch(function (error) {
      console.error(error);
      dispatch(loadDashboardFailure());
    });
};
};
const loadDashboardSuccess = (events) => ({
  type: "LOAD_DASHBOARD_SUCCESS",
  events,
});

export const loadDashboardFailure = (id) => ({
  type: 'LOAD_DASHBOARD_FAILURE',
  id
})
export const postDashboardFailure = () => ({
  type: 'POST_DASHBOARD_FAILURE'
})

// export const loadDashboard = (id) => ({
//   type: 'LOAD_DASHBOARD', id
// })

// start post event data
const postEventSuccess = (id) => ({
  type: "POST_EVENT_SUCCESS",
  id,
});
const postDashboardSuccess = (id) => ({
  type: "POST_Dashboard_SUCCESS",
  id,
});
const postEventFailure = (id) => ({
  type: "POST_EVENT_FAILURE",
  id,
});

const postEventRedux = (id, title, location, date, members, note, image) => ({
  type: "POST_EVENT",
  id,
  title,
  location,
  date,
  members,
  note,
  image,
});
const postDashboardRedux = (id, title, location, date, members, note, pictures) => ({
  type: "POST_DASHBOARD",
  id,
  title,
  location,
  date,
  members,
  note,
  pictures,
});

export const postEvent = (title, location, date, members, note, image) => {
  let id = Date.now();
  return (dispatch) => {
    dispatch(postEventRedux(id, title, location, date, members, note, image))
    return request
      .post("/", {id, title, location, date, members, note, image})
      .then(function (response) {
        dispatch(postEventSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postEventFailure(id));
      });
  };
};
export const postDashboard = (title, location, date, members, note, pictures) => {
  let id = Date.now();
  return (dispatch) => {
    dispatch(postDashboardRedux(id, title, location, date, members, note, pictures))
    return request
      .post("/", {id, title, location, date, members, note, pictures})
      .then(function (response) {
        dispatch(postDashboardSuccess(response.data));
      })
      .catch(function (error) {
        console.error(error);
        dispatch(postDashboardFailure(id));
      });
  };
};
export const searchEvent = (value) => ({
  type: "SEARCH_EVENT",
  value: value.trim()
})

export const searchEventReset = () => ({
  type: "SEARCH_EVENT_RESET"
})