import stats from "../../data/stats.json";
import Counter from "./Counter";

export default function Stats() {

    return (

        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">

                {
                    stats.map((item, index) => (
                        <Counter
                            key={index}
                            {...item}
                        />
                    ))
                }

            </div>

        </section>

    )

}