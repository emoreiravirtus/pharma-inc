const orderByGender = {
  increasing: (a, b) => {
    if (a.gender < b.gender) return -1;
    if (a.gender > b.gender) return 1;
    return 0;
  },
  decreasing: (a, b) => {
    if (a.gender > b.gender) return -1;
    if (a.gender < b.gender) return 1;
    return 0;
  },
};

export default orderByGender;
