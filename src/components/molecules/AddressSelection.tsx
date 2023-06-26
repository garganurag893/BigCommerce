import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import { useCheckoutStore } from '../../store/useCheckoutStore';
import { shallow } from 'zustand/shallow';
import { useStepStore } from '../../store/useStepStore';

const AddressSelection = () => {
  const { addressDetails, setAddressDetails } = useCheckoutStore(
    (state) => ({
      addressDetails: state.addressDetails,
      setAddressDetails: state.setAddressDetails,
    }),
    shallow
  );
  const handleContinue = useStepStore((state) => state.handleContinue);
  const [formData, setFormData] = useState(
    addressDetails || {
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      zip: '',
      state: 'India',
    }
  );
  const [errors, setErrors] = useState(new Map<string, string>());

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (value.length === 0) {
      setErrors((prevMap) => {
        const nextMap = new Map(prevMap);
        nextMap.set(name, 'Please fill out this field.');
        return nextMap;
      });
    } else if (errors.has(name)) {
      setErrors((prevMap) => {
        const nextMap = new Map(prevMap);
        nextMap.delete(name);
        return nextMap;
      });
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const newErros = new Map<string, string>(errors);
    Object.keys(formData).forEach((key) => {
      if (formData[key as 'firstName'].length === 0) {
        newErros.set(key, 'Please fill out this field.');
      }
    });
    if (newErros.size > 0) {
      setErrors(newErros);
    } else {
      setAddressDetails(formData);
      handleContinue();
    }
  };

  return (
    <>
      <h2 className="text-2xl font-medium text-center mb-8">Address Details</h2>
      <form className="w-full max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <Input
            name="firstName"
            placeholder="Iron"
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.get('firstName')}
            grid={2}
          />
          <Input
            name="lastName"
            placeholder="Man"
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.get('lastName')}
            grid={2}
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <Input
            name="streetAddress"
            placeholder="Enter complete address"
            label="Street Address"
            type="text"
            value={formData.streetAddress}
            onChange={handleChange}
            error={errors.get('streetAddress')}
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <Input
            name="city"
            placeholder="Enter city"
            label="City"
            type="text"
            value={formData.city}
            onChange={handleChange}
            error={errors.get('city')}
            grid={3}
          />
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              State
            </label>
            <Select
              name="state"
              value={formData.state}
              options={[
                'India',
                'United States',
                'Dubai',
                'Europe',
                'Australia',
              ]}
              onChange={handleStateChange}
            />
          </div>
          <Input
            name="zip"
            placeholder="133001"
            label="Zip"
            type="text"
            value={formData.zip}
            onChange={handleChange}
            error={errors.get('zip')}
            grid={3}
          />
        </div>
        <input
          type="submit"
          value={addressDetails ? 'Update' : 'Save'}
          className="cursor-pointer px-4 py-3 mt-8 bg-black text-white rounded-md hover:scale-105 duration-300 w-full"
        />
      </form>
    </>
  );
};

export default AddressSelection;
