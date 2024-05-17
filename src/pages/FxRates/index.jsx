import { Title } from "@/components"
import { edit } from "@/assets/icons"
import { Button } from "@/components/ui"
import { CopyIcon } from "@radix-ui/react-icons"

const FxRates = () => {
    return (
        <section className="section">
            <Title>FX Rates</Title>
            <div className="pt-6">
                <h2>Review Details of your Exchange from NAIRA to USD</h2>
                <div className="flex flex-col gap-3">
                    <div className="flex w-full justify-between items-center gap-16 pt-3">
                        <h2 className="text-sm font-bold leading-tight w-[10%]">1 USD</h2>
                        <div className="flex justify-between gap-5">
                            <div className="text-neutral-400 text-base w-1/2 font-light px-3 py-2 bg-white rounded-lg border border-neutral-400 flex justify-between">1520.76 NGN
                                <img
                                    src={edit}
                                    alt="edit"
                                    style={{
                                        cursor: "pointer",
                                        width: "20px",
                                    }}
                                />
                            </div>
                            <p className="text-sm w-2/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam impedit ex eius blanditiis, aliquam eum sapiente.</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center gap-16 pt-3">
                        <h2 className="text-sm font-bold leading-tight w-[10%]">1 USD</h2>
                        <div className="flex justify-between gap-5">
                            <div className="text-neutral-400 text-base w-1/2 font-light px-3 py-2 bg-white rounded-lg border border-neutral-400 flex justify-between">1520.76 NGN
                                <img
                                    src={edit}
                                    alt="edit"
                                    style={{
                                        cursor: "pointer",
                                        width: "20px",
                                    }}
                                />
                            </div>
                            <p className="text-sm w-2/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam impedit ex eius blanditiis, aliquam eum sapiente.</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center gap-16 pt-3">
                        <h2 className="text-sm font-bold leading-tight w-[10%]">1 USD</h2>
                        <div className="flex justify-between gap-5">
                            <div className="text-neutral-400 text-base w-1/2 font-light px-3 py-2 bg-white rounded-lg border border-neutral-400 flex justify-between">1520.76 NGN
                                <img
                                    src={edit}
                                    alt="edit"
                                    style={{
                                        cursor: "pointer",
                                        width: "20px",
                                    }}
                                />
                            </div>
                            <p className="text-sm w-2/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam impedit ex eius blanditiis, aliquam eum sapiente.</p>
                        </div>
                    </div>
                    <div className="flex w-full justify-between items-center gap-16 pt-3">
                        <h2 className="text-sm font-bold leading-tight w-[10%]">1 USD</h2>
                        <div className="flex justify-between gap-5">
                            <div className="text-neutral-400 text-base w-1/2 font-light px-3 py-2 bg-white rounded-lg border border-neutral-400 flex justify-between">1520.76 NGN
                                <img
                                    src={edit}
                                    alt="edit"
                                    style={{
                                        cursor: "pointer",
                                        width: "20px",
                                    }}
                                />
                            </div>
                            <p className="text-sm w-2/3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis quisquam impedit ex eius blanditiis, aliquam eum sapiente.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-16 flex justify-between w-1/2">
                <Button variant="outline" size="sm" className="px-20 flex gap-2">
                    Save
                    <CopyIcon className="h-[18px] w-[18px]" />
                </Button>
                <Button variant="darkerGrey" size="sm" className="px-20">Cancel</Button>
            </div>
        </section>
    )
}
export default FxRates;