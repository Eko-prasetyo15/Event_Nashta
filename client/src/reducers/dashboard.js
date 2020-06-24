const dashboard = (state = { events: [] }, action) => {
  switch (action.type) {
    case "LOAD_DASHBOARD_SUCCESS":
      console.log(action.events, "ini detail");
      return {
        ...state,
        events: action.events,
      };
      case "POST_DASHBOARD":
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          location: action.location,
          date: action.date,
          members: action.members,
          note: action.note,
          pictures: action.pictures,
          sent: true,
        },
      ];

    case "POST_DASHBOARD_SUCCESS":
      return state.map((item) => {
        if (item.id === action.event.id) {
          item.sent = true;
        }
        return item;
      });

    case "POST_DASHBOARD_FAILURE":
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item;
      });
    
    case "LOAD_DASHBOARD_FAILURE":
    default:
      return state;
  }
};


export default dashboard;
