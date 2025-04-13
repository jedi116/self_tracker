export const styles = {
  // Common table styles
  tableHeaders: {
    fontSize: {
      xs: '20px!important',
      sm: '20px!important',
      md: '25px!important',
      lg: '25px!important',
    },
    backgroundColor: 'rgba(0, 61, 77, 0.9)!important',
    color: 'white!important',
    fontFamily: 'SaiyanFont!important',
    textShadow: '1px 1px 0 #002936',
  },
  tableRows: {
    fontSize: {
      xs: '13px!important',
      sm: '15px!important',
      md: '17px!important',
      lg: '18px!important',
    },
    fontFamily: 'SaiyanFont!important',
    color: 'white!important',
    borderColor: 'rgba(255, 255, 255, 0.1)!important',
  },

  // Workouts styles
  workouts: {
    workoutWrapper: {
      height: 500,
      width: '100%',
      '& .custom-header': {
        fontSize: {
          xs: '20px!important',
          sm: '20px!important',
          md: '25px!important',
          lg: '25px!important',
        },
        backgroundColor: 'rgba(0, 61, 77, 0.9)!important',
        color: 'white!important',
        fontFamily: 'SaiyanFont!important',
        textShadow: '1px 1px 0 #002936',
      },
      '& .MuiDataGrid-cell': {
        fontSize: {
          xs: '13px!important',
          sm: '15px!important',
          md: '17px!important',
          lg: '18px!important',
        },
        fontFamily: 'SaiyanFont!important',
        color: 'white!important',
        borderColor: 'rgba(255, 255, 255, 0.1)!important',
      },
      '& .MuiDataGrid-root': {
        backgroundColor: 'rgba(0, 41, 54, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        color: 'white',
      },
      '& .MuiDataGrid-columnHeaders': {
        borderBottom: '2px solid rgba(101, 184, 203, 0.3)',
      },
      '& .MuiDataGrid-row': {
        backgroundColor: 'rgba(0, 41, 54, 0.5)',
        '&:hover': {
          backgroundColor: 'rgba(0, 61, 77, 0.7)',
        },
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      },
      '& .MuiDataGrid-footerContainer': {
        backgroundColor: 'rgba(0, 41, 54, 0.8)',
        borderTop: '1px solid rgba(101, 184, 203, 0.2)',
      },
      '& .MuiTablePagination-root': {
        color: 'white',
      },
    },
  },

  // Tab styles
  tabTextStyles: {
    fontSize: {
      xs: '0.8em !important',
      sm: '1.2em !important',
      md: '1.5em !important',
      lg: '2em !important',
    },
    marginLeft: {
      xs: '0.1% !important',
      sm: '2% !important',
      md: '5% !important',
      lg: '5% !important',
    },
    fontFamily: 'SaiyanFont, sans-serif',
    color: '#fff',
  },
  tabsContainer: {
    width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
    height: { xs: 'auto', sm: '60vh', md: '70vh' },
    margin: 'auto',
    borderRadius: 2,
  },
  tabsHeader: {
    borderBottom: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: '30%',
  },
  tabPanel: {
    p: 3,
  },

  // Modal styles
  modal: {
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1300,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    paper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: { xs: '95%', sm: '90%', md: '85%', lg: '80%' },
      maxWidth: '1000px',
      backgroundColor: 'rgba(0, 41, 54, 0.95)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: 2,
      padding: { xs: '15px', sm: '20px', md: '25px' },
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    },
    closeButton: {
      position: 'absolute',
      top: { xs: 5, sm: 8, md: 10 },
      right: { xs: 5, sm: 8, md: 10 },
      color: 'white',
      backgroundColor: 'rgba(101, 184, 203, 0.1)',
      zIndex: 10,
      '&:hover': {
        backgroundColor: 'rgba(101, 184, 203, 0.2)',
      },
    },
  },

  // Loading styles
  loading: {
    overlay: {
      position: 'fixed!important',
      top: '0!important',
      left: '0!important',
      width: '100%!important',
      height: '100%!important',
      backgroundColor: 'rgba(0, 0, 0, 0.5)!important',
      display: 'flex!important',
      justifyContent: 'center!important',
      alignItems: 'center!important',
      zIndex: '9999!important',
    },
  },

  // Header styles
  header: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
      margin: 'auto',
      borderRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      mb: 4,
    },
    title: {
      fontSize: { xs: '1rem', sm: '3rem', md: '5rem', lg: '8rem' },
      fontFamily: 'SaiyanFont, sans-serif',
      color: '#fff',
      textShadow: '2px 2px 0 #003d4d',
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'center',
      '& .MuiButtonGroup-grouped:not(:last-of-type)': {
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderRight: '1px solid rgba(255, 255, 255, 0.3) !important',
      },
      gap: { xs: 1, sm: 2, md: 3 },
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    button: {
      fontSize: {
        xs: '0.5rem !important',
        sm: '1rem !important',
        md: '1.3rem !important',
        lg: '1.3rem !important',
      },
      padding: { xs: '8px 10px', sm: '10px 16px', md: '12px 24px', lg: '14px 28px' },
      borderRadius: '4px !important',
      minWidth: { xs: '30px', sm: '50px', md: '70px' },
      backgroundColor: '#003d4d !important',
      color: 'white !important',
      fontFamily: 'SaiyanFont, sans-serif',
      margin: '0 !important',
      textTransform: 'none',
      '&:hover': { backgroundColor: '#00526a !important' },
    },
    buttonIcon: {
      mr: 1,
      fontSize: '1.2rem',
    },
  },

  // WorkoutTypeForm styles
  workoutTypeForm: {
    form: {
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      alignItems: 'center',
    },
    inputLabel: {
      fontSize: '16px',
      color: 'white',
    },
    input: {
      fontSize: '16px',
      backgroundColor: 'rgba(101, 184, 203, 0.1) !important',
      color: 'white !important',
      p: 1,
      borderRadius: '4px',
      width: '100%',
      '&:hover': { backgroundColor: 'rgba(101, 184, 203, 0.2) !important' },
      '&:focus': { backgroundColor: 'rgba(101, 184, 203, 0.25) !important' },
    },
    helperText: {
      fontSize: '12px',
      color: 'rgba(255,255,255,0.7)',
    },
    button: {
      backgroundColor: '#65b8cb !important',
      color: 'white !important',
      '&.MuiButton-root:hover': { backgroundColor: '#4a98ab !important' },
      borderRadius: '4px !important',
      padding: '8px 16px !important',
      marginTop: '10px !important',
      fontSize: '15px',
      fontFamily: 'SaiyanFont, sans-serif',
      textTransform: 'none',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2) !important',
      width: '80%',
    },
  },

  // Page styles
  page: {
    container: {
      height: '100vh',
      flexGrow: 1,
    },
    paper: {
      marginLeft: '2%',
      marginTop: '2%',
      width: '95%',
      height: '100vh',
      flexGrow: 1,
      backgroundColor: 'rgba(0, 41, 54, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: 2,
    },
  },

  // Goals styles
  goals: {
    container: {
      height: 500,
      width: '100%',
      '& .custom-header': {
        fontSize: {
          xs: '20px!important',
          sm: '20px!important',
          md: '25px!important',
          lg: '25px!important',
        },
        backgroundColor: 'rgba(0, 61, 77, 0.9)!important',
        color: 'white!important',
        fontFamily: 'SaiyanFont!important',
        textShadow: '1px 1px 0 #002936',
      },
      '& .MuiDataGrid-cell': {
        fontSize: {
          xs: '13px!important',
          sm: '15px!important',
          md: '17px!important',
          lg: '18px!important',
        },
        fontFamily: 'SaiyanFont!important',
        color: 'white!important',
        borderColor: 'rgba(255, 255, 255, 0.1)!important',
      },
      '& .MuiDataGrid-root': {
        backgroundColor: 'rgba(0, 41, 54, 0.7)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 2,
        color: 'white',
      },
      '& .MuiDataGrid-columnHeaders': {
        borderBottom: '2px solid rgba(101, 184, 203, 0.3)',
      },
      '& .MuiDataGrid-row': {
        backgroundColor: 'rgba(0, 41, 54, 0.5)',
        '&:hover': {
          backgroundColor: 'rgba(0, 61, 77, 0.7)',
        },
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      },
      '& .MuiDataGrid-footerContainer': {
        backgroundColor: 'rgba(0, 41, 54, 0.8)',
        borderTop: '1px solid rgba(101, 184, 203, 0.2)',
      },
      '& .MuiTablePagination-root': {
        color: 'white',
      },
    },
    editButton: {
      backgroundColor: '#003d4d !important',
      color: 'white !important',
      marginRight: '8px',
      fontFamily: 'SaiyanFont, sans-serif',
      '&:hover': { backgroundColor: '#00526a !important' },
    },
    deleteButton: {
      backgroundColor: '#9a0e0e !important',
      color: 'white !important',
      fontFamily: 'SaiyanFont, sans-serif',
      '&:hover': { backgroundColor: '#c01717 !important' },
    },
  },

  // Summary styles
  summary: {
    container: {
      width: '100%',
      p: 2,
    },
    title: {
      fontFamily: 'SaiyanFont, sans-serif',
      color: '#fff',
      textAlign: 'center',
      mb: 4,
    },
    summaryCards: {
      mb: 4,
    },
    card: {
      p: 2,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 41, 54, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#fff',
    },
    sectionTitle: {
      mt: 4,
      mb: 2,
      fontFamily: 'SaiyanFont, sans-serif',
      color: '#fff',
    },
    chartContainer: {
      p: 2,
      mb: 4,
      backgroundColor: 'rgba(0, 41, 54, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    tooltipStyle: {
      backgroundColor: 'rgba(0, 41, 54, 0.95)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      color: '#fff',
    },
    workoutTypeTitle: {
      mb: 2,
      color: '#fff',
    },
    progressCard: {
      p: 2,
      backgroundColor: 'rgba(0, 41, 54, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      height: '100%',
    },
    metricRow: {
      display: 'flex',
      justifyContent: 'space-between',
      mb: 1,
    },
    metricLabel: {
      color: '#fff',
    },
    getMetricValueStyle: (value: number) => {
      let color = '#fff';
      if (value > 0) color = '#4caf50';
      else if (value < 0) color = '#f44336';

      return {
        color,
        fontWeight: 'bold',
      };
    },
  },
};
