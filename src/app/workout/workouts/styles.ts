import { styles as otherStyles } from '@/app/workout/styles';
export const styles = {
  workoutWrapper: {
    height: 500,
    width: '100%',
    '& .custom-header': {
      ...otherStyles.tableHeaders,
    },
    '& .MuiDataGrid-cell': {
      ...otherStyles.tableRows,
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
};
