// import { API, graphqlOperation } from 'aws-amplify';
// import React, { useEffect, useState } from 'react';
// import { View, Text } from 'react-native';

// import { listCategories } from '../../src/graphql/queries'

// const ServiceForm = () => {
//     const [category, setCategories] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState('');

//     useEffect(() => {
//         const fetchServices = async () => {
//             try {
//                 const categoryData = await API.graphql(graphqlOperation(listCategories));
//                 const categoryList = categoryData.data.listCategories.items;
//                 console.log('category list:', categoryList)
//                 setCategories(categoryData);
//             } catch (error) {
//                 console.log('Error fetching services:', error);
//             }
//         };

//         fetchServices();
//     }, []);

//     const handleServiceChange = (value) => {
//         setSelectedCategory(value);
//     };

//     return (
//         <View>
//             <Text>Select a service:</Text>
//             <Picker
//                 selectedValue={selectedCategory}
//                 onValueChange={handleServiceChange}
//             >
//                 {services.map((service) => (
//                     <Picker.Item
//                         key={service.id}
//                         label={service.title}
//                         value={service.title}
//                     />
//                 ))}
//             </Picker>
//         </View>
//     );
// };

// export default ServiceForm;