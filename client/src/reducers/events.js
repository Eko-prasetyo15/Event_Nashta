const events = (state = [], action) => {
  switch (action.type) {
    case "LOAD_EVENT_SUCCESS":
      console.log(action.events, "ini actiooooonnn")
      return action.events.data.map((item) => {
        item.sent = true;
        return item;
      });
    case "LOAD_EVENT_FAILURE":
    default:
      return state;


    case "POST_EVENT":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          location: action.location,
          date: action.date,
          members: action.members,
          note: action.note,
          image: action.image,
          sent: true,
        },
      ];

    case "POST_EVENT_SUCCESS":
      return state.map((item) => {
        if (item.id === action.event && action.event.id) {
          item.sent = true;
        }
        return item;
      });

    case "POST_EVENT_FAILURE":
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item;
      });
    case "SEARCH_EVENT":
      return state.map((item) => ({
        ...item,
        isVisible: (item.datas && item.datas.title.toLowerCase().includes(action.value) || item.datas && item.datas.title.includes(action.value) || (item.datas && item.datas.location.includes(action.value)
          || item.datas && item.datas.location.includes(action.value)))

      }))
    case "SEARCH__EVENT_RESET":
      return state.map((item) => ({
        ...item,
        isVisible: true
      }))

  }

};



export default events;
