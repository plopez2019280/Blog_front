import {
	ArticleCard,
	ArticleCardSkeleton,
	ErrorMessage,
} from "../../../components/index";
import { FaArrowRight } from "react-icons/fa";
import { toast } from "react-hot-toast";

import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../../services/index/posts";

function Articles() {
	const { data, isLoading, isError } = useQuery({
		queryFn: () => getAllPosts(),
		queryKey: ["posts"],
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return (
		<section className="container  px-5 py-10 mx-auto" id="articles">
			<div className="flex flex-wrap gap-x-5 gap-y-5">
				{isLoading ? (
					[...Array(3)].map((item, index) => (
						<ArticleCardSkeleton
							key={index}
							className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
						/>
					))
				) : isError ? (
					<ErrorMessage message="Couldn't fetch the posts data" />
				) : (
					data?.map((post) => (
						<ArticleCard
							key={post._id}
							post={post}
							className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
						/>
					))
				)}
			</div>
		</section>
	);
}

export default Articles;
