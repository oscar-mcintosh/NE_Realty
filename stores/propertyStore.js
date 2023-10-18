import { defineStore } from 'pinia';

export const usePropertyStore = defineStore('property', {
  state: () => ({
    property: [],
  }),
  actions: {
      async getProperty() {

      try {
        const { public: { apiKey, apiUrl } } = useRuntimeConfig();

        const headers = new Headers({
          'Authorization': `Bearer ${apiKey}`,
        });

        const config = { headers };

        const response = await fetch(apiUrl, config);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        // console.log(data)
        
        const propertyList = data.records.map(record => ({
          id: record.id,
          name: record.fields.Name,
          street: record.fields.street,
          state: record.fields.state,
          zipcode: record.fields.zipcode,
          sqft: record.fields.sqft,
          image: record.fields.photos1,
          price: record.fields.price,
          baths: record.fields.baths,
          type: record.fields.type,
          beds: record.fields.beds,
          city: record.fields.city,
          status: record.fields.status,
        }));

        this.property = propertyList;

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});

