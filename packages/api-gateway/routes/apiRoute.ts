import axios from "axios";
import { Router, Request, Response } from "express";


const router = Router();
const baseUrl = 'https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants'

router.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));

router.get('/restaurant', async (req: Request, res:Response) => {
    // - 567051 (ร้านลืมเคี้ยว)
    // - 227018 (Ekkamai Macchiato - Home Brewer)

	// const {restaurantId} = req.params
	// const apiUrl = `${rootApi}/${restaurantId}.json`
	const restIds = [567051, 227018];
	
	try {
		const responses = await Promise.all(
			restIds.map(async (id) => {
			  const apiUrl = `${baseUrl}/${id}.json`;
			  const response = await axios.get(apiUrl);

			  return response.data;
			})
		  );
		
		res.status(200).json(responses)
	} catch (error) {
		console.error('Error fetching restaurant data: ', error)
		res.status(500).json({error: 'Failted to fetch restaurant data'})
	}
})

router.get('/restaurant/:restaurantId/:menuName/short', async (req: Request, res:Response) => {
	const {restaurantId, menuName} = req.params
	const apiUrl = `${baseUrl}/${restaurantId}/menus/${menuName}/short.json`
    

	try {
		const response = await axios.get(apiUrl)
		
		res.status(200).json(response.data)
	} catch (error) {
		console.error('Error fetching short menu: ', error)
		res.status(500).json({error: 'Failted to fetch short menu'})
	}
})

router.get('/restaurant/:restaurantId/:menuName/full', async (req: Request, res:Response) => {
	const {restaurantId, menuName} = req.params
	const apiUrl = `${baseUrl}/${restaurantId}/menus/${menuName}/full.json`
    

	try {
		const response = await axios.get(apiUrl)
		
		res.status(200).json(response.data)
	} catch (error) {
		console.error('Error fetching full menu: ', error)
		res.status(500).json({error: 'Failted to fetch full menu'})
	}
})

export default router