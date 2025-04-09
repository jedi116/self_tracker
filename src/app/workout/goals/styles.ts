export const goalsStyles = {
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
};
