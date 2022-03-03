import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {useHistory} from 'react-router-dom';


// const Container = styled.div`
//     margin: 1rem auto;
//     padding: 4rem;
//     width: 31.25rem;
   
// `

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.businessoffashion.com/arc-prod-images/GBTY63KM6ZCTXPQXD3AHCSMYAY?auto=format%2Ccompress&crop=faces%2Centropy&fit=crop&max-h=512&w=1024") center;
  display: flex;
  align-items: center;
  justify-content: center;


`
const Wrapper = styled.div`
  padding: 20px;
  width: auto;
  background-color: white;
  border-radius: 8px;

`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

`
const Title = styled.h1`
  font-size: 25
  px;
 // margin-left: 155px;

`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin-top: 20px;
  margin-left: 50px;
  margin-right: 50px;

`
const TextArea = styled.textarea`
    flex: 1;
    width: 67%;
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
   // width: 100%;

`
const Select = styled.select`
    flex: 1;
    width: 67%;
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
   // width: 100%;

`

const Button = styled.button`
  margin-top: 20px;
  width: 40%;
  border: none;
  padding: 10px;
  //border-radius: 5%;
  background-color:#6f2da8;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  &:hover{
      // background-color: #b19cd9;
      background-color: #7D4BB1;
  }

`
const Text = styled.p`
  margin-top: 10px;
  font-size: 12px;
`
const TextLink = styled.a`
  margin: 10px 0px;
  text-decoration: underline;
  cursor: pointer;
  color: white; 
  font-weight: bold;
`;
const AddProduct = () => {

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [categories, setCategories] = useState('')
    const [img, setImg] = useState('')
   //  const [img, setImg] = useState({})
    //const [fileName, setFileName] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')

    const onChangeFile = (e) =>{
      setImg(e.target.files[0]);
    }
    

    // const handleAddProduct = async (e) => {
    //     e.preventDefault();

    //     try{
    //       let fd = new FormData();
    //       fd.append('file', img);
    //       fd.append("title", title);
    //        fd.append("desc", desc);
    //         fd.append("price", price);
    //          fd.append("quantity", quantity);
        
  
    //       const res = await axios.post("http://localhost:5000/api/products",fd,{headers: { "Content-Type": "multipart/form-data" }},
    //       );

    //          if(res.status === 200){
    //               history.push('/pages/Admin/AdminProducts')
    //         }

    //     }catch(err){
    //         console.log(err);
    //     }
        
    // }
    // setTitle('')
    // setDesc('')
    // setCategories('')
    // setImg('')
    // setPrice('')

    const handleAddProduct = async (e) => {
          e.preventDefault();
  
          try{
           
             const res = await axios.post("http://localhost:5000/api/products",
             {
               title,
               desc, 
               categories,
               img,
               price,
               quantity
             });
  
               if(res.status === 200){
                    history.push('/pages/Admin/AdminProducts')
              }
  
          }catch(err){
              console.log(err);
          }
          
      }


    return (
        <Container>
      <Wrapper>
 
        <Form>
          <Title>ADD PRODUCT</Title>
         <Input placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
         <TextArea placeholder="desc" type="text" value={desc} onChange={(e) => setDesc(e.target.value)}/>
         {/* <Input placeholder="cat" type="text" value={categories} onChange={(e) => setCategories(e.target.value)}/> */}
         <Select style={{width:"67%"}} value={categories} onChange={(e) => setCategories(e.target.value)}>
           <option value="shampoo">Shampoo</option>
           <option value="conditioner">Conditioner</option>
           <option value="mask">Mask</option>
         </Select>
         <TextArea placeholder="img" type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
         {/* <Input placeholder="img" type="file" filename="img" onChange={onChangeFile}/> */}
         <Input placeholder="price" type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)}/>
         <Input placeholder="quantity" type="number" min="0" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

          <Button  onClick={(e) => handleAddProduct(e)}>
            Add Product
          </Button>
          
         
        </Form>
      </Wrapper>
    </Container>
    //     <Container>
    //     <form  encType="multipart/form-data">
    //     <div className="mb-3">
    //       <label htmlFor="title" className="form-label">Title</label>
    //       <input type="text" value={title} onChange ={e => setTitle(e.target.value)} className="form-control" placeHolder="Product Title"/>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="desc" class="form-label">Description</label>
    //       <textarea  value={desc} onChange ={e => setDesc(e.target.value)} className="form-control" placeHolder="Product Description" rows="3"></textarea>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="categories" className="form-label">Category</label>
    //       <input type="text" value={categories} onChange ={e => setCategories(e.target.value)} className="form-control" placeHolder="Product Category"/>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="img" class="form-label">Image</label>
    //       <textarea value={img} onChange ={e => setImg(e.target.value)} className="form-control" placeHolder="Product Image" rows="3"></textarea>
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    //       <input type="number" value={price} onChange ={e => setPrice(e.target.value)} className="form-control" placeHolder="Price"/>
    //     </div>
        
    //     <button onSubmit={(e) => handleAddProduct(e)} type="submit" className="btn btn-primary">Add Product</button>
    //   </form>

    //   </Container>
    );
};

export default AddProduct;
