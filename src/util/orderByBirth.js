const orderByBirth = {
  increasing: (a, b) => {
    if (a.dob.date < b.dob.date) return -1;
    if (a.dob.date > b.dob.date) return 1;
    return 0;
  },
  decreasing: (a, b) => {
    if (a.dob.date > b.dob.date) return -1;
    if (a.dob.date < b.dob.date) return 1;
    return 0;
  },
};

export default orderByBirth;
