export const showToast = (type, propsList, setProperties, propContainer, message) => {
    switch (type) {
        case 'success':
            propContainer = {
                id: 'successToast',
                title: 'Success',
                message: message,
                variant: 'success',
                backgroundColor: '#00C851',
            }
            break;
        case 'error':
            propContainer = {
                id: 'errorToast',
                title: 'Error',
                message: message,
                variant: 'error',
                backgroundColor: '#FF5252',
            }
            break;
        case 'warning':
            propContainer = {
                id: 'warningToast',
                title: 'Warning',
                message: 'Something went wrong',
                variant: 'warning',
                backgroundColor: '#FF9800',
            }
            break;
        case 'info':
            propContainer = {
                id: 'infoToast',
                title: 'Info',
                message: message,
                variant: 'info',
                backgroundColor: '#2196F3',
            }
            break;
        default:
            propContainer = []
    }
    setProperties([...propsList, propContainer])
    setTimeout(() => {
        setProperties(propsList.filter(prop => prop.id !== propContainer.id))
    }, 3000)
}