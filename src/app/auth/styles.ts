export const authStyles = {
  container: {
    height: '90vh',
  },
  paper: {
    marginLeft: '25%',
    marginTop: '5%',
    minHeight: '40vh',
    width: '50%',
    backgroundColor: 'rgba(0, 41, 54, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 2,
  },
  title: {
    marginLeft: '25%',
    fontSize: '2rem',
    fontFamily: 'SaiyanFont, sans-serif',
    color: '#fff',
    textShadow: '2px 2px 0 #003d4d',
  },
  form: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between !important',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'rgba(101, 184, 203, 0.2)',
      color: 'white',
      '& input': {
        color: 'white',
      },
      '&.Mui-focused': {
        backgroundColor: 'rgba(101, 184, 203, 0.3)',
        color: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
    width: '50%',
    marginLeft: '30%',
  },
  submitButton: {
    marginTop: '10px !important',
    marginLeft: '35% !important',
    backgroundColor: '#003d4d !important',
    color: 'white !important',
    '&.MuiButton-root:hover': { backgroundColor: '#00526a !important' },
    borderRadius: '2px !important',
    padding: '2px !important',
    width: '40% !important',
  },
  failureImage: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
};
